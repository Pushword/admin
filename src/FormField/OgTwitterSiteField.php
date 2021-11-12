<?php

namespace Pushword\Admin\FormField;

use Pushword\Core\Entity\PageInterface;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\TextType;

/**
 * @extends AbstractField<PageInterface>
 */
class OgTwitterSiteField extends AbstractField
{
    /**
     * @param FormMapper<PageInterface> $form
     *
     * @return FormMapper<PageInterface>
     */
    public function formField(FormMapper $form): FormMapper
    {
        return $form->add('twitterSite', TextType::class, [
            'required' => false,
            'label' => 'admin.page.twitterSite.label',
            'help_html' => true,
            'help' => 'admin.page.twitterSite.help',
        ]);
    }
}
