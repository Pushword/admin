<?php

namespace Pushword\Admin\FormField;

use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class PageMetaRobotsField extends AbstractField
{
    public function formField(FormMapper $form): FormMapper
    {
        return $form->add('metaRobots', ChoiceType::class, [
            'choices' => [
                'admin.page.metaRobots.choice.noIndex' => 'noindex',
            ],
            'label' => 'admin.page.metaRobots.label',
            'required' => false,
        ]);
    }
}
