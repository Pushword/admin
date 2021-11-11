<?php

namespace Pushword\Admin\FormField;

use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class OgTitleField extends AbstractField
{
    public function formField(FormMapper $form): FormMapper
    {
        return $form->add('ogTitle', TextType::class, [
            'label' => 'admin.page.ogTitle.label',
            'required' => false,
            'help_html' => true,
            'help' => 'admin.page.ogTitle.help',
        ]);
    }
}
