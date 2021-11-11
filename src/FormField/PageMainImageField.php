<?php

namespace Pushword\Admin\FormField;

use Sonata\AdminBundle\Form\FormMapper;

class PageMainImageField extends AbstractField
{
    public function formField(FormMapper $form): FormMapper
    {
        $form->add('mainImage', \Sonata\AdminBundle\Form\Type\ModelListType::class, [
            'required' => false,
            'class' => $this->admin->getMediaClass(),
            'label' => ' ', //'admin.page.mainImage.label',
            'btn_edit' => false,
        ]);

        return $form;
    }
}
