<?php

namespace App\Repository;

use App\Entity\Mugs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Mugs|null find($id, $lockMode = null, $lockVersion = null)
 * @method Mugs|null findOneBy(array $criteria, array $orderBy = null)
 * @method Mugs[]    findAll()
 * @method Mugs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MugsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Mugs::class);
    }

    // /**
    //  * @return Mugs[] Returns an array of Mugs objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Mugs
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
