<?php

namespace Pushword\Admin\FormField;

use Pushword\Core\Entity\Page;
use Pushword\Core\Repository\PageRepository;

use function Safe\json_encode;

use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\TextType;

/**
 * @template T of object
 *
 * @extends AbstractField<T>
 */
class TagsField extends AbstractField
{
    public function formField(FormMapper $form): void
    {
        /** @var PageRepository */
        $pageRepo = $this->admin->getEntityManager()->getRepository(Page::class);
        $allTags = $pageRepo->getAllTags();

        $form->add('tags', TextType::class, [
            'required' => false,
            'attr' => [
                'class' => 'textarea-no-newline tagsField',
                'placeholder' => 'admin.page.tags.label',
                'data-tags' => json_encode($allTags),
                'id' => 'suggests-tags-input',
                'autofocus' => '',
            ],
            'row_attr' => [
                'class' => 'tagsFieldWrapper ce-block__content',
            ],
            'label' => ' ',
            'help' => ' <div id="suggest-tags" style="display:none;"></div>',
            'help_html' => true,
        ]);
    }
}
