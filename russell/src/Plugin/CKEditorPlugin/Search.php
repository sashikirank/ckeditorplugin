<?php

namespace Drupal\russell\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "Google Search" plugin.
 *
 * @CKEditorPlugin(
 *   id = "googlesearch",
 *   label = @Translation("Google Search"),
 *   module = "russell"
 * )
 */
class Search extends CKEditorPluginBase {

  /**
   * {@inheritdoc}
   */
  public function getFile() {
   return drupal_get_path('module', 'russell') . '/js/plugins/RussellEditor/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getDependencies(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
      return [
        'googlesearch' => [
          'label' => t('Google Search'),
          'image' => drupal_get_path('module', 'russell') . '/js/plugins/RussellEditor/icons/googlesearch.png',          
        ],
      ];
  }

  /**
   * {@inheritdoc}
   */
  public function isEnabled(Editor $editor) {
    
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [
      'drupalLink_dialogTitleAddRussell' => $this->t('Add Link'),
      'drupalLink_dialogTitleEditRussell' => $this->t('Edit Link'),
    ];
  }

    /**
   * {@inheritdoc}
   *
   * @see \Drupal\editor\Form\EditorImageDialog
   * @see editor_image_upload_settings_form()
   */
  public function settingsForm(array $form, FormStateInterface $form_state, Editor $editor) {
    $form_state->loadInclude('editor', 'admin.inc');
    $form['image_upload'] = editor_image_upload_settings_form($editor);
    $form['image_upload']['#attached']['library'][] = 'russell/drupal.russell.drupalimage.admin';
    $form['image_upload']['#element_validate'][] = [$this, 'validateImageUploadSettings'];
    return $form;
  }

  public function validateImageUploadSettings(array $element, FormStateInterface $form_state) {
    $settings = &$form_state->getValue(['editor', 'settings', 'plugins', 'drupalimage', 'image_upload']);
    $form_state->get('editor')->setImageUploadSettings($settings);
    $form_state->unsetValue(['editor', 'settings', 'plugins', 'drupalimage']);
  }


}