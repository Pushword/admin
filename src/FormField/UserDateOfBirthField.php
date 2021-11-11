<?php

namespace Pushword\Admin\FormField;

use Sonata\AdminBundle\Form\FormMapper;
use Sonata\Form\Type\DatePickerType;

class UserDateOfBirthField extends AbstractField
{
    public function formField(FormMapper $form): FormMapper
    {
        $dateTime = new \DateTime();

        return $form->add(
            'dateOfBirth',
            DatePickerType::class,
            [
                'years' => range(1900, $dateTime->format('Y')),
                'dp_min_date' => '1-1-1900',
                'dp_max_date' => $dateTime->format('c'),
                'required' => false,
                'label' => 'admin.user.dateOfBirth.label',
            ]
        );
    }
}
