<?php

namespace Pushword\Admin\FormField;

use Sonata\AdminBundle\Form\FormMapper;
use Sonata\Form\Type\DatePickerType;

class UserDateOfBirthField extends AbstractField
{
    public function formField(FormMapper $formMapper): FormMapper
    {
        $now = new \DateTime();

        return $formMapper->add(
            'dateOfBirth',
            DatePickerType::class,
            [
                'years' => range(1900, $now->format('Y')),
                'dp_min_date' => '1-1-1900',
                'dp_max_date' => $now->format('c'),
                'required' => false,
                'label' => 'admin.user.dateOfBirth.label',
            ]
        );
    }
}
