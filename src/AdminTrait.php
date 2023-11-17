<?php

namespace Pushword\Admin;

use Doctrine\ORM\EntityManagerInterface;
use Pushword\Admin\FormField\AbstractField;
use Pushword\Admin\FormField\Event as FormEvent;
use Pushword\Core\Component\App\AppPool;
use Pushword\Core\Entity\MediaInterface;
use Pushword\Core\Entity\PageInterface;
use Pushword\Core\Entity\UserInterface;
use Pushword\Core\Service\ImageManager;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Symfony\Contracts\Service\Attribute\Required;
use Twig\Environment as Twig;

/**
 * @template T of object
 */
trait AdminTrait
{
    protected AppPool $apps;

    /**
     * @var class-string<PageInterface>
     */
    protected string $pageClass;

    /**
     * @var class-string<MediaInterface>
     */
    protected string $mediaClass;

    protected string $userClass;

    protected EntityManagerInterface $em;

    protected RouterInterface $router;

    protected TokenStorageInterface $securityTokenStorage;

    protected string $formFieldKey = 'admin_page_form_fields';

    /**
     * @var string
     */
    protected static $thumb = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIzMnB4IiB2ZXJzaW
                9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIg
                eG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8
                vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub
                2RkIiBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iIzkyOTI5MiIgaWQ9Imljb24
                tMjEtZXllLWhpZGRlbiI+PHBhdGggZD0iTTguMTA4Njk4OTEsMjAuODkxMzAxMSBDNC42MTcyMDgxNiwxOC44MzAxMTQ3IDMsMT
                YgMywxNiBDMywxNiA3LDkgMTYsOSBDMTcuMzA0NTEwNyw5IDE4LjUwMzk3NTIsOS4xNDcwNjQ2NiAxOS42MDE0Mzg4LDkuMzk4
                NTYxMjIgTDE4Ljc1MTkwMTcsMTAuMjQ4MDk4MyBDMTcuODk3MTQ4NCwxMC4wOTAwNTQ2IDE2Ljk4MDA5MjksMTAgMTYsMTAgQzg
                sMTAgNC4xOTk5NTExNywxNiA0LjE5OTk1MTE3LDE2IEM0LjE5OTk1MTE3LDE2IDUuNzE0NzI4MDgsMTguMzkxNzIyNSA4Ljg0ND
                kyNzEzLDIwLjE1NTA3MjkgTDguMTA4Njk4OTEsMjAuODkxMzAxMSBMOC4xMDg2OTg5MSwyMC44OTEzMDExIEw4LjEwODY5ODkxLD
                IwLjg5MTMwMTEgWiBNMTIuMzk4NTYxLDIyLjYwMTQzOSBDMTMuNDk2MDI0NiwyMi44NTI5MzU2IDE0LjY5NTQ4OTIsMjMuMDAwMD
                AwMSAxNiwyMyBDMjUsMjIuOTk5OTk5IDI5LDE2IDI5LDE2IEMyOSwxNiAyNy4zODI3OTE4LDEzLjE2OTg4NTYgMjMuODkxMzAwOC
                wxMS4xMDg2OTkyIEwyMy4xNTUwNzI3LDExLjg0NDkyNzMgQzI2LjI4NTI3MTksMTMuNjA4Mjc3NiAyNy44MDAwNDg4LDE2IDI3Lj
                gwMDA0ODgsMTYgQzI3LjgwMDA0ODgsMTYgMjQsMjEuOTk5OTk5IDE2LDIyIEMxNS4wMTk5MDcsMjIuMDAwMDAwMSAxNC4xMDI4N
                TE1LDIxLjkwOTk0NTUgMTMuMjQ4MDk4MSwyMS43NTE5MDE5IEwxMi4zOTg1NjEsMjIuNjAxNDM5IEwxMi4zOTg1NjEsMjIuNjAxN
                DM5IEwxMi4zOTg1NjEsMjIuNjAxNDM5IFogTTE5Ljg5ODY1MzEsMTUuMTAxMzQ2OSBDMTkuOTY0OTY1OCwxNS4zOTAyMTE1IDIwL
                DE1LjY5MTAxNDQgMjAsMTYgQzIwLDE4LjIwOTEzOTEgMTguMjA5MTM5MSwyMCAxNiwyMCBDMTUuNjkxMDE0NCwyMCAxNS4zOTAyM
                TE1LDE5Ljk2NDk2NTggMTUuMTAxMzQ2OSwxOS44OTg2NTMxIEwxNiwxOSBDMTYuNzY3NzY2OSwxOS4wMDAwMDAxIDE3LjUzNTUzM
                zksMTguNzA3MTA2OCAxOC4xMjEzMjAzLDE4LjEyMTMyMDMgQzE4LjcwNzEwNjgsMTcuNTM1NTMzOSAxOS4wMDAwMDAxLDE2Ljc2N
                zc2NjkgMTksMTYgTDE5Ljg5ODY1MzEsMTUuMTAxMzQ2OSBMMTkuODk4NjUzMSwxNS4xMDEzNDY5IEwxOS44OTg2NTMxLDE1LjEwM
                TM0NjkgWiBNMTYuODk4NjUzMSwxMi4xMDEzNDY5IEMxNi42MDk3ODg1LDEyLjAzNTAzNDIgMTYuMzA4OTg1NiwxMiAxNiwxMiBDM
                TMuNzkwODYwOSwxMiAxMiwxMy43OTA4NjA5IDEyLDE2IEMxMiwxNi4zMDg5ODU2IDEyLjAzNTAzNDIsMTYuNjA5Nzg4NSAxMi4xM
                DEzNDY5LDE2Ljg5ODY1MzEgTDEzLDE2IEMxMi45OTk5OTk5LDE1LjIzMjIzMzEgMTMuMjkyODkzMiwxNC40NjQ0NjYxIDEzLjg3O
                DY3OTcsMTMuODc4Njc5NyBDMTQuNDY0NDY2MSwxMy4yOTI4OTMyIDE1LjIzMjIzMzEsMTIuOTk5OTk5OSAxNiwxMyBMMTYuODk4N
                jUzMSwxMi4xMDEzNDY5IEwxNi44OTg2NTMxLDEyLjEwMTM0NjkgTDE2Ljg5ODY1MzEsMTIuMTAxMzQ2OSBaIE0yNCw3IEw3LDI0I
                Ew4LDI1IEwyNSw4IEwyNCw3IEwyNCw3IFoiIGlkPSJleWUtaGlkZGVuIi8+PC9nPjwvZz48L3N2Zz4=';

    abstract public function setListMode(string $mode): void;

    protected EventDispatcherInterface $eventDispatcher;

    #[Required]
    public function setEventDispatcher(EventDispatcherInterface $eventDispatcher): void
    {
        $this->eventDispatcher = $eventDispatcher;
    }

    abstract public function getRequest(): Request;

    abstract public function hasRequest(): bool;

    /**
     * Must be a cookie to check before to do that
     * If you click one time to list, stay in liste mode.
     * Yes it's in the session
     * TODO.
     * */
    protected function setMosaicDefaultListMode(): self
    {
        if ($this->hasRequest() && ($mode = (string) $this->getRequest()->query->get('_list_mode')) !== '') {
            $this->setListMode($mode);
        } else {
            $this->setListMode('mosaic');
        }

        return $this;
    }

    /**
     * @param class-string<AbstractField<T>> $field
     * @param FormMapper<T>                  $form
     */
    protected function addFormField(string $field, FormMapper $form): void
    {
        (new $field($this))->formField($form);
    }

    public function getUser(): UserInterface
    {
        if (null === $this->securityTokenStorage->getToken() || ! ($user = $this->securityTokenStorage->getToken()->getUser()) instanceof UserInterface) {
            throw new \LogicException();
        }

        return $user;
    }

    #[Required]
    public function setSecurityTokenStorage(TokenStorageInterface $securityTokenStorage): void
    {
        $this->securityTokenStorage = $securityTokenStorage;
    }

    #[Required]
    public function setEntityManager(EntityManagerInterface $entityManager): void
    {
        $this->em = $entityManager;
    }

    public function getEntityManager(): EntityManagerInterface
    {
        return $this->em;
    }

    /** Used in AbstractField::class / MediaPreviewField::class */
    protected Twig $twig;

    #[Required]
    public function setTwig(Twig $twig): void
    {
        $this->twig = $twig;
    }

    public function getTwig(): Twig
    {
        return $this->twig;
    }

    /**
     * @param class-string<PageInterface> $pageClass
     */
    #[Required]
    public function setPageClass(string $pageClass): void
    {
        $this->pageClass = $pageClass;
    }

    #[Required]
    public function setApps(AppPool $appPool): void
    {
        $this->apps = $appPool;
    }

    public function getApps(): AppPool
    {
        return $this->apps;
    }

    /**
     * @param class-string<MediaInterface> $mediaClass
     */
    #[Required]
    public function setMediaClass(string $mediaClass): void
    {
        $this->mediaClass = $mediaClass;
    }

    /**
     * @param class-string<UserInterface> $userClass
     */
    #[Required]
    public function setUserClass(string $userClass): void
    {
        $this->userClass = $userClass;
    }

    #[Required]
    public function setRouter(RouterInterface $router): void
    {
        $this->router = $router;
    }

    public function getRouter(): RouterInterface
    {
        return $this->router;
    }

    /**
     * @return class-string<MediaInterface>
     */
    public function getMediaClass(): string
    {
        return $this->mediaClass;
    }

    /**
     * @return class-string<PageInterface>
     */
    public function getPageClass(): string
    {
        return $this->pageClass;
    }

    public function getMessagePrefix(): string
    {
        return $this->messagePrefix;
    }

    /**
     * @psalm-suppress InvalidArgument
     *
     * @return array<mixed>
     */
    protected function getFormFields(): array
    {
        $fields = $this->apps->get()->get($this->formFieldKey);

        if (! \is_array($fields)) {
            throw new \LogicException($this->formFieldKey);
        }

        $event = new FormEvent($this, $fields); // @phpstan-ignore-line
        $this->eventDispatcher->dispatch($event, FormEvent::NAME);

        return $event->getFields();
    }

    private ImageManager $imageManager;

    public function getImageManager(): ImageManager
    {
        return $this->imageManager;
    }

    #[Required]
    public function setImageManager(ImageManager $imageManager): self
    {
        $this->imageManager = $imageManager;

        return $this;
    }
}
