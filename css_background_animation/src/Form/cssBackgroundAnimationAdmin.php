<?php
/**
 * @file
 * Contains \Drupal\css_background_animation\Form\ContentManagementForm.
 */
namespace Drupal\css_background_animation\Form;


use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\file\FileUsage\FileUsageInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class cssBackgroundAnimationAdmin extends ConfigFormBase {
  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'css_background_animation_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    $form = parent::buildForm($form, $form_state);
    $config = $this->config('css_background_animation.settings');

    $form['home'] = [
      '#type' => 'fieldset',
      '#title' => 'Home page',
    ];


    $form['home']['css_selector'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Home page - Description on banner'),
      '#default_value' => $config->get('css_background_animation.css_selector'),
    ];
     $form['home']['shape'] = [
      '#type' => 'select',
      '#title' => $this->t('Animation Shape'),
      '#options' => [
        'circle' => $this->t('Circle'),
        'square' => $this->t('Square'),
        'bubble' => $this->t('Bubble'),
      ],
      '#empty_option' => $this->t('-select-'),
      '#default_value' => $config->get('css_background_animation.shape'),
    ];
   $form['home']['color'] = [
      '#type' => 'color',
      '#title' => $this->t('Color'),
      '#default_value' => $config->get('css_background_animation.color'),
      '#description' => 'Color, #type = color',
    ];
    $form['home']['small_count'] = [
      '#type' => 'number',
      '#title' => $this->t('Number of small items'),
      '#description' => $this->t('Number, #type = number'),
      '#default_value' => $config->get('css_background_animation.small_count'),
    ];
    $form['home']['medium_count'] = [
      '#type' => 'number',
      '#title' => $this->t('Number of medium items'),
      '#description' => $this->t('Number, #type = number'),
      '#default_value' => $config->get('css_background_animation.medium_count'),
    ];
    $form['home']['large_count'] = [
      '#type' => 'number',
      '#title' => $this->t('Number of large items'),
      '#description' => $this->t('Number, #type = number'),
      '#default_value' => $config->get('css_background_animation.large_count'),
    ];

    $form['home']['transition'] = [
      '#type' => 'select',
      '#title' => $this->t('Transition Effect'),
      '#options' => [
        'updown' => $this->t('Move Up Down'),
        'leftright' => $this->t('Move Left Right'),
        'grow' => $this->t('Grow'),
        'glow' => $this->t('Glow'),
      ],
      '#empty_option' => $this->t('-select-'),
      '#default_value' => $config->get('css_background_animation.transition'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('css_background_animation.settings');

    $config->set('css_background_animation.css_selector', $form_state->getValue('css_selector'));
    $config->set('css_background_animation.shape', $form_state->getValue('shape'));
    $config->set('css_background_animation.color', $form_state->getValue('color'));
    $config->set('css_background_animation.small_count', $form_state->getValue('small_count'));
    $config->set('css_background_animation.medium_count', $form_state->getValue('medium_count'));
    $config->set('css_background_animation.large_count', $form_state->getValue('large_count'));
    $config->set('css_background_animation.transition', $form_state->getValue('transition'));
    $config->save();    

    return parent::submitForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'css_background_animation.settings',
    ];
  }
}
