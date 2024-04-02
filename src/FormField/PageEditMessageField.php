<?php

namespace Pushword\Admin\FormField;

use Pushword\Core\Entity\Page;
use Pushword\Version\PushwordVersionBundle;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

/**
 * @extends AbstractField<Page>
 */
class PageEditMessageField extends AbstractField
{
    /**
     * @param FormMapper<Page> $form
     */
    public function formField(FormMapper $form): void
    {
        $form->add('editMessage', TextareaType::class, [
            'required' => false,
            'attr' => ['class' => 'autosize textarea-no-newline'],
            'label' => $this->formFieldManager->getMessagePrefix().'.editMessage.label',
            'help' => $this->getHelp(),
            'help_html' => true,
        ]);
    }

    private function getHelp(): string
    {
        $page = $this->admin->getSubject();
        $editMessage = $page->getEditMessage();
        $page->setEditMessage('');

        return null !== $page->getId() ?
            $this->admin->getTranslator()->trans($this->formFieldManager->getMessagePrefix().'.editMessage.help'.(class_exists(PushwordVersionBundle::class) ? 'Versionned' : ''), [
                '%lastEditDatetime%' => $page->safegetUpdatedAt()->format($this->admin->getTranslator()->trans('datetimeMediumFormat')),
                '%lastEditMessage%' => '' !== $editMessage ? '«&nbsp;'.$editMessage.'&nbsp;»' : '-',
                '%seeVersionLink%' => class_exists(PushwordVersionBundle::class)
                    ? $this->formFieldManager->router->generate('pushword_version_list', ['id' => $page->getId()])
                    : '',
            ]) : '';
    }

    private function getSubject(): Page
    {
        return $this->admin->getSubject();
    }
}
