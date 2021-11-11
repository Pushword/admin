<?php

namespace Pushword\Admin\FormField;

use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\FileType;

final class MediaMediaFileField extends AbstractField
{
    public function formField(FormMapper $form): FormMapper
    {
        return $form->add('mediaFile', FileType::class, [
            'label' => 'admin.media.mediaFile.label',
            'required' => $this->admin->getSubject() && $this->admin->getSubject()->getMedia() ? false : true,
        ]);
    }
}
