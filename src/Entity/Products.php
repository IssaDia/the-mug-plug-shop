<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductsRepository")
 * @ApiResource
 */
class Products
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="float")
     */
    private $price;

    /**
     * @ORM\Column(type="integer")
     */
    private $numbers;

    /**
     * @ORM\Column(type="boolean")
     */
    private $inCart;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getNumbers(): ?int
    {
        return $this->numbers;
    }

    public function setNumbers(int $numbers): self
    {
        $this->numbers = $numbers;

        return $this;
    }

    public function getInCart(): ?bool
    {
        return $this->inCart;
    }

    public function setInCart(bool $inCart): self
    {
        $this->inCart = $inCart;

        return $this;
    }
}
