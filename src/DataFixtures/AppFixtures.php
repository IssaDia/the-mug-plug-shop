<?php

namespace App\DataFixtures;

use Faker;
use Faker\Factory;
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

        for ($i = 1; $i < 10; $i++) {
            $user = new User();
            $hash = $this->encoder->encodePassword($user, "password");
            $user->setFirstName($faker->firstName)
                ->setLastName($faker->lastName)
                ->setEmail($faker->email)
                ->setPassword($hash);
            $manager->persist($user);

            $titles = array('T-shirts', 'Mugs', 'Posters');
            foreach ($titles as &$title) {
                $category = new Category();
                $category->setTitle($title);
                $manager->persist($category);
                for ($j = 1; $j < 10; $j++) {

                    $product = new Products();
                    $product->setName($title . ' ' . $j);
                    $product->setPrice($faker->randomFloat(2, 15, 30));
                    $product->setDescription($faker->text);
                    $product->setCategory($category);
                    $manager->persist($product);
                }
            }
        }



        $manager->flush();
    }
}
