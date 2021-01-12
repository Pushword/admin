<?php

namespace Pushword\Admin\DependencyInjection;

use Pushword\Admin\FormField\CreatedAtField;
use Pushword\Admin\FormField\CustomPropertiesField;
use Pushword\Admin\FormField\OgDescription;
use Pushword\Admin\FormField\OgDescriptionField;
use Pushword\Admin\FormField\OgImageField;
use Pushword\Admin\FormField\OgTitleField;
use Pushword\Admin\FormField\OgTwitterCardField;
use Pushword\Admin\FormField\OgTwitterCreatorField;
use Pushword\Admin\FormField\OgTwitterSite;
use Pushword\Admin\FormField\OgTwitterSiteField;
use Pushword\Admin\FormField\PageH1Field;
use Pushword\Admin\FormField\PageHostField;
use Pushword\Admin\FormField\PageImagesField;
use Pushword\Admin\FormField\PageLocaleField;
use Pushword\Admin\FormField\PageMainContentField;
use Pushword\Admin\FormField\PageMainImageField;
use Pushword\Admin\FormField\PageMetaRobotsField;
use Pushword\Admin\FormField\PageNameField;
use Pushword\Admin\FormField\PageParentPageField;
use Pushword\Admin\FormField\PageSearchExcreptField;
use Pushword\Admin\FormField\PageSlugField;
use Pushword\Admin\FormField\PageTitleField;
use Pushword\Admin\FormField\PageTranslationsField;
use Pushword\Conversation\Form\MessageForm;
use Pushword\Conversation\Form\MultiStepMessageForm;
use Pushword\Conversation\Form\NewsletterForm;
use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    const DEFAULT_APP_FALLBACK = [
        'admin_page_form_fields',
    ];

    const DEFAULT_ADMIN_PAGE_FORM_FIELDS = [
        [PageH1Field::class, PageMainContentField::class],
        [
            'admin.page.state.label' => [CreatedAtField::class, PageMetaRobotsField::class],
            'admin.page.permanlien.label' => [PageHostField::class, PageSlugField::class],
            'admin.page.mainImage.label' => [PageMainImageField::class],
            'admin.page.parentPage.label' => [PageParentPageField::class],
            'admin.page.search.label' => [
                'expand' => true,
                'fields' => [PageTitleField::class, PageNameField::class, PageSearchExcreptField::class],
            ],
            'admin.page.translations.label' => [PageLocaleField::class, PageTranslationsField::class],
            'admin.page.customProperties.label' => ['expand' => true, 'fields' => [CustomPropertiesField::class]],
            'admin.page.gallery.label' => [PageImagesField::class],
            'admin.page.og.label' => [
                'expand' => true,
                'fields' => [OgTitleField::class, OgDescriptionField::class, OgImageField::class,
                    OgTwitterCardField::class, OgTwitterSiteField::class, OgTwitterCreatorField::class],
            ],
        ]
    ];

    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder('pushword_admin');
        $treeBuilder
            ->getRootNode()
                ->children()
                    ->variableNode('app_fallback_properties')->defaultValue(self::DEFAULT_APP_FALLBACK)->cannotBeEmpty()->end()
                    ->variableNode('admin_page_form_fields')->defaultValue(self::DEFAULT_ADMIN_PAGE_FORM_FIELDS)->cannotBeEmpty()->end()
                ->end()
        ;

        return $treeBuilder;
    }
}