<?php

namespace Pushword\Admin\FormField;

use Pushword\Core\Entity\PageInterface;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelAutocompleteType;

class PageTranslationsField extends AbstractField
{
    public function formField(FormMapper $form): FormMapper
    {
        return $form->add('translations', ModelAutocompleteType::class, [
            'required' => false,
            'multiple' => true,
            'class' => $this->admin->getPageClass(),
            'property' => 'slug',
            'label' => 'admin.page.translations.label',
            'help_html' => true,
            'help' => 'admin.page.translations.help',
            'btn_add' => false,
            'to_string_callback' => fn (PageInterface $entity): string => $entity->getLocale().' ('.$entity->getSlug().')',
        ]);
    }
}
