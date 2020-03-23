<?php


namespace App\Controller;

use App\Entity\Contact;
use App\Notifications\ContactNotification;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


class ContactController extends AbstractController


{

    /**
     * @Route("/contact", name="contact")
     */
    public function new(Request $request, \Swift_Mailer $mailer)
    {
        $contact = new Contact();

        $form = $this->createFormBuilder($contact)
            ->add('name', TextType::class, [
                'attr' => [
                    'id'=>'name'
                ]
            ])
            ->add('email', EmailType::class)
            ->add('subject', TextType::class)
            ->add('message', TextType::class)
            ->add('save', SubmitType::class, [
                'label' => 'Envoyer',
                'attr' => [
                    'class'=>'submit-btn']])
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $contact = $form->getData();
            $message = (new \Swift_Message($contact->getSubject()))
                ->setFrom($contact->getEmail())
                ->setTo('issadevtest@gmail.com')
                ->setReplyTo($contact->getEmail())
                ->setBody($this->renderView('app/email.html.twig', [
                    'contact' => $contact
                ]), 'text/html');

            $mailer->send($message);
            $this->addFlash('success', 'Votre mail a bien été envoyé');
            return $this->redirectToRoute('app');
        }
        


        return $this->render('app/contact.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
