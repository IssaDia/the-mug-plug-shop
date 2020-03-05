<?php

namespace App\Repository;

use App\Entity\DataProducts;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method DataProducts|null find($id, $lockMode = null, $lockVersion = null)
 * @method DataProducts|null findOneBy(array $criteria, array $orderBy = null)
 * @method DataProducts[]    findAll()
 * @method DataProducts[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DataProductsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DataProducts::class);
    }

    // /**
    //  * @return DataProducts[] Returns an array of DataProducts objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DataProducts
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
