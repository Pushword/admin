<?php

return [
    'sonata_admin' => [
        'security' => [
            'handler' => 'sonata.admin.security.handler.role',
            'role_admin' => 'ROLE_ADMIN',
            'role_super_admin' => 'ROLE_SUPER_ADMIN',
        ],
        'title' => 'Admin',
        'title_logo' => '/bundles/pushwordadmin/logo.svg',
        'dashboard' => [
            'blocks' => null, // - { type: sonata.admin.block.admin_list, position: left }
            'groups' => [
                'app.admin.group.page' => [
                    'keep_open' => true,
                    'provider' => 'page_admin_menu',
                ],
                'app.admin.group.setting' => [
                    'keep_open' => true,
                    'label' => 'admin.label.params',
                    'translation_domain' => 'messages',
                    'icon' => '<i class="fa fa-wrench"></i>',
                    'items' => [
                        0 => 'pushword.admin.user',
                    ],
                ],
            ],
        ],
        'options' => [
            'lock_protection' => true,
            'default_admin_route' => 'edit',
            'logo_content' => 'icon',
            'sort_admins' => true,
            'confirm_exit' => false,
            'list_action_button_content' => 'icon',
        ],
        'templates' => [
            'layout' => '@pwAdmin/layout.html.twig',
            'knp_menu_template' => '@pwAdmin/Menu/menu.html.twig',
            'user_block' => '@pwAdmin/user_block.html.twig',
            'button_create' => '@pwAdmin/Button/create_button.html.twig',
        ],
        'search' => false,
        'global_search' => ['admin_route' => 'edit'],
        'breadcrumbs' => ['child_admin_route' => 'edit'],
    ],
    'sonata_block' => [
        'blocks' => [
            'sonata.admin.block.admin_list' => [
                'contexts' => [
                    0 => 'admin',
                ],
            ],
            'sonata.admin.block.search_result' => [
                'contexts' => [
                    0 => 'admin',
                ],
            ],
        ],
    ],
];
