<?php

namespace Pushword\Admin\FormField;

use Pushword\Core\Repository\PageRepository;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class PageParentPageField extends AbstractField
{
    public function formField(FormMapper $form): FormMapper
    {
        return $form->add(
            'parentPage',
            EntityType::class,
            array_merge(
                [
                    'class' => $this->admin->getPageClass(),
                    'label' => 'admin.page.parentPage.label',
                    'required' => false,
                ],
                ($this->admin->getSubject()->getId() ? ['query_builder' => fn (PageRepository $er) => $er->createQueryBuilder('p')
                    ->andWhere('p.id != :id')
                    ->setParameter('id', $this->admin->getSubject()->getId()), ] : [])
            )
        );
    }
}
