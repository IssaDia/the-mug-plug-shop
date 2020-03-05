<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductsRepository")
 * @ApiResource(
 * normalizationContext={
 * "groups"={"product"}})
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
     * @Groups({"product"})
     */
    private $name;

    /**
     * @ORM\Column(type="float")
     * @Groups({"product"})
     */
    private $price;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"product"})
     */
    private $numbers;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"product"})
     */
    private $inCart;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="product")
     * @ORM\JoinColumn(nullable=false)
     */
    private $category;

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

    public function setNumbers(?int $numbers): self
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

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }
}
