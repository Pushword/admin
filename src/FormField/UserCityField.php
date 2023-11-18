<?php

namespace Pushword\Admin\FormField;

use Pushword\Core\Entity\UserInterface;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\TextType;

/**
 * @extends AbstractField<UserInterface>
 */
class UserCityField extends AbstractField
{
    /**
     * @param FormMapper<UserInterface> $form
     */
    public function formField(FormMapper $form): void
    {
        $form->add(
            'city',
            TextType::class,
            [
                'required' => false,
                'label' => 'admin.user.city.label',
            ]
        );
    }
}
