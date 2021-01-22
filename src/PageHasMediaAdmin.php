<?php

namespace Pushword\Admin;

use Pushword\Core\Entity\MediaInterface;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelListType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class PageHasMediaAdmin extends AbstractAdmin implements PageHasMediaAdminInterface
{
    use AdminTrait;

    protected string $messagePrefix = 'admin.media';

    /**
     * @param MediaInterface|null $media
     */
    protected function getMedialHelp($media): string
    {
        if (! ($media && $media->getMedia() && false !== strpos($media->getMimeType(), 'image/'))) {
            return '';
        }

        $editUrl = $this->routeGenerator->generate('admin_app_media_edit', ['id' => $media->getId()]);
        $thumbUrl = $this->imageManager->getBrowserPath($media, 'thumb');
        $defaultUrl = $this->imageManager->getBrowserPath($media, 'default');

        $help = '<div><a href="'.$editUrl.'" target=_blank style="display:block">';
        $help .= '<img src="'.$thumbUrl.'" style="width:100%; max-width:300px">';
        $help .= '</a>';
        $help .= '<pre onclick="copyElementText(this);" class="btn"';
        $help .= ' style="font-size:80%;text-overflow:ellipsis;margin-top:10px;max-width:160px;white-space:nowrap;';
        $help .= 'display:block;overflow:hidden">';
        $help .= '!['.str_replace(['[', '"', ']'], ' ', $media->getName()).']('.$defaultUrl.')';
        $help .= '</pre></div>'; // TODO move it to twig file

        return $help;
    }

    protected function configureFormFields(FormMapper $formMapper): void
    {
        $media = $this->getSubject() ? $this->getSubject()->getMedia() : null;

        $formMapper
            ->add(
                'media',
                ModelListType::class,
                [
                    'required' => false,
                    'btn_delete' => false,
                    'btn_edit' => false,
                    'btn_add' => (! $media) ? ' ' : false,
                    'btn_list' => (! $media) ? ' ' : false,
                    'help' => $this->getMedialHelp($media),
                    'help_html' => true,
                ]
            )
            ->add('position', HiddenType::class);
    }

    protected function configureListFields(ListMapper $listMapper): void
    {
        $listMapper
            ->add('media')
            ->add('page');
    }
}
