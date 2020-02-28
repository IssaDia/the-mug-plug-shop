<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CartController extends AbstractController
{
    /**
     * @Route("/cart", name="cart")
     */
    public function index()
    {
        return $this->render('cart/index.html.twig', [
            'controller_name' => 'CartController',
        ]);
    }

     /**
     * @Route("/cart/add/{id}", name="cart_add")
     */
    public function add($id, Request $request)
    {

        $session = $request->getSession();

        $cart = $session->get('cart', []);

        $cart[$id] = 1;

        $session->set('cart', $cart);

        dd($session->get('panier'));

       
    }
}
