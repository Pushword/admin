<?php

namespace Pushword\Admin\FormField;

use Sonata\AdminBundle\Form\FormMapper;
use Sonata\Form\Type\DateTimePickerType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class PagePublishedAtField extends AbstractField
{
    public function formField(FormMapper $form): FormMapper
    {
        return $form->add('publishedAt', DateTimePickerType::class, [
            'format' => DateTimeType::HTML5_FORMAT,
            'dp_side_by_side' => true,
            'dp_use_current' => true,
            'dp_use_seconds' => false,
            'dp_collapse' => true,
            'dp_calendar_weeks' => false,
            'dp_view_mode' => 'days',
            'dp_min_view_mode' => 'days',
            'label' => $this->admin->getMessagePrefix().'.publishedAt.label',
            'help' => $this->getHelp(),
            'help_html' => true,
        ]);
    }

    private function getHelp(): string
    {
        $published = $this->getSubject()->getpublishedAt() <= new \Datetime('now');
        // TODO: translate
        return $this->getSubject() && $this->getSubject()->getSlug() ?
            ($published ? '<span style="color:#449d44">Publié</span>' : 'Brouillon (publication programmée)')
            : '';
    }

    private function getSubject()
    {
        return $this->admin->getSubject();
    }
}
