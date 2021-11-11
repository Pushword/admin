<?php

namespace Pushword\Admin\FormField;

use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\TextType;

final class MediaNameField extends AbstractField
{
    public function formField(FormMapper $form): FormMapper
    {
        return $form->add('name', TextType::class, [
            'required' => $this->admin->getSubject() && $this->admin->getSubject()->getMedia(),
            'help_html' => true,
            'help' => 'admin.media.name.help',
            'label' => 'admin.media.name.label',
            'attr' => ['ismedia' => 1, 'class' => 'col-md-6'],
        ]);
    }
}
