<?php

namespace Pushword\Admin\FormField;

use Pushword\Core\Entity\PageInterface;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\TextType;

/**
 * @extends AbstractField<PageInterface>
 */
class PageSlugField extends AbstractField
{
    protected function getSlugHelp(): string
    {
        if ('' === $this->admin->getSubject()->getSlug()) {
            return 'admin.page.slug.help';
        }

        /** @param PageInterface $page */
        $page = $this->admin->getSubject();

        $url = $this->admin->getRouter()->generate('pushword_page', ['slug' => $page->getRealSlug()]);
        $liveUrl = $page->getHost() ?
            $this->admin->getRouter()->generate(
                'custom_host_pushword_page',
                ['host' => $page->getHost(), 'slug' => $page->getRealSlug()]
            ) : $url;

        return '<div id="disabledLinkSlug">
                    <span class="btn btn-primary" onclick="toggleDisabled()" style="float:right; margin-top:-43px; z-index:100;position:relative"><i class="fa fa-unlock"></i></span>
                    <script>function toggleDisabled() {
                        $(".slug_disabled").first().removeAttr("disabled");
                        $(".slug_disabled").first().focus();
                        $("#disabledLinkSlug").first().remove();
                    }</script> <small><a href="'.$liveUrl.'"><small><i class="fa fa-link"></i></small> '.\symfony\component\string\u($url)->truncate(30, '…').'</a></small></div>';
    }

    /**
     * @param FormMapper<PageInterface> $form
     *
     * @return FormMapper<PageInterface>
     */
    public function formField(FormMapper $form): FormMapper
    {
        return $form->add('slug', TextType::class, [
            'required' => false,
            'label' => 'admin.page.slug.label',
            'help_html' => true,
            'help' => $this->getSlugHelp(),
            'attr' => [
                'class' => 'slug_disabled',
                ($this->admin->getSubject() ? ($this->admin->getSubject()->getSlug() ? 'disabled' : 't') : 't') => '',
            ],
        ]);
    }
}
