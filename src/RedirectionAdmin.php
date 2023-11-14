<?php

namespace Pushword\Admin;

use Doctrine\ORM\QueryBuilder;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\ProxyQueryInterface;
use Sonata\AdminBundle\Form\FormMapper;

class RedirectionAdmin extends PageAdmin
{
    /**
     * @psalm-suppress InvalidArgument
     */
    protected function configureFormFields(FormMapper $form): void
    {
        $this->formFieldKey = 'admin_redirection_form_fields';
        parent::configureFormFields($form);
    }

    protected function generateBaseRouteName(bool $isChildAdmin = false): string
    {
        return 'admin_redirection';
    }

    protected function generateBaseRoutePattern(bool $isChildAdmin = false): string
    {
        return 'app/redirection';
    }

    protected function configureQuery(ProxyQueryInterface $query): ProxyQueryInterface
    {
        $query = AbstractAdmin::configureQuery($query);

        /** @var QueryBuilder */
        $qb = $query->getQueryBuilder(); // @phpstan-ignore-line

        $rootAlias = current($qb->getRootAliases());

        $qb->andWhere(
            $qb->expr()->like($rootAlias.'.mainContent', ':mcf')
        );
        $qb->setParameter('mcf', 'Location:%');

        return $query;
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list->addIdentifier('h1', 'html', [
            'label' => 'admin.page.title.label',
            'template' => '@pwAdmin/page/page_list_titleField.html.twig',
        ]);
        $list->add('mainContent', 'text', [
            'label' => 'Redirection',
        ]);
        $list->add('updatedAt', 'datetime', [
            'format' => 'd/m à H:m',
            'label' => 'admin.page.updatedAt.label',
        ]);
        $list->add('_actions', null, [
            'actions' => [
                'edit' => [],
                'show' => [],
                'delete' => [],
            ],
            'row_align' => 'right',
            'header_class' => 'text-right',
            'label' => 'admin.action',
        ]);
    }
}