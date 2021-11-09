<?php

namespace Pushword\Admin\FormField;

use Pushword\Version\PushwordVersionBundle;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class PageEditMessageField extends AbstractField
{
    public function formField(FormMapper $formMapper): FormMapper
    {
        return $formMapper->add('editMessage', TextareaType::class, [
            'required' => false,
            'attr' => ['class' => 'autosize textarea-no-newline'],
            'label' => $this->admin->getMessagePrefix().'.editMessage.label',
            'help' => $this->getHelp(),
            'help_html' => true,
        ]);
    }

    private function getHelp(): string
    {
        $editMessage = $this->getSubject()->getEditMessage();
        $this->getSubject()->setEditMessage('');

        return $this->getSubject() && $this->getSubject()->getSlug() ?
            $this->admin->getTranslator()->trans($this->admin->getMessagePrefix().'.editMessage.help'.(class_exists(PushwordVersionBundle::class) ? 'Versionned' : ''), [
                '%lastEditDatetime%' => $this->getSubject()->getUpdatedAt()->format($this->admin->getTranslator()->trans('datetimeMediumFormat')),
                '%lastEditMessage%' => $editMessage ? '«&nbsp;'.$editMessage.'&nbsp;»' : '-',
                '%seeVersionLink%' => class_exists(PushwordVersionBundle::class)
                    ? $this->admin->getRouter()->generate('pushword_version_list', ['id' => $this->getSubject()->getId()])
                    : '',
            ]) : '';
    }

    private function getSubject()
    {
        return $this->admin->getSubject();
    }
}
