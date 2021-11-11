<?php

namespace Pushword\Admin\FormField;

use Sonata\AdminBundle\Form\FormMapper;

final class MediaNamesField extends AbstractField
{
    public function formField(FormMapper $form): FormMapper
    {
        return $form->add('names', null, [
            'required' => false,
            'help_html' => true, 'help' => 'admin.media.names.help',
            'label' => 'admin.media.names.label',
            'attr' => ['ismedia' => 1, 'class' => 'col-md-6'],
        ]);
    }
}
