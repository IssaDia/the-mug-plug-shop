<?php

namespace App\DataFixtures;

use Faker;
use Faker\Factory;
use App\Entity\Mugs;
use App\Entity\User;
use App\Entity\Category;
use App\Entity\Products;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    /**
     * L'encodeur de mot de passe 
     *
     * @var UserPasswordEncoderInterface
     */
    private $encoder;
    public function __construct(UserPasswordEncoderInterface $encoder){

        $this->encoder = $encoder;

    }
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

     /*   for ($i = 1; $i < 2; $i++) {
            $user = new User();
            $hash = $this->encoder->encodePassword($user, "password");
            $user->setFirstName($faker->firstName)
                ->setLastName($faker->lastName)
                ->setEmail($faker->email)
                ->setPassword($hash);
            $manager->persist($user);

            

           
                $category = new Category(); 
                $category->setTitle('Posters');
                $manager->persist($category); */
                for ($j = 1; $j < 15; $j++) {

                    $product = new Mugs();
                    $product->setName('Mug ' . $j);
                    $product->setPrice($faker->randomFloat(2, 15, 30));
                    $product->setNumbers(0);
                    $product->setInCart(false);
                    $manager->persist($product);
                }
        //    }
    



        $manager->flush();
    }
}
