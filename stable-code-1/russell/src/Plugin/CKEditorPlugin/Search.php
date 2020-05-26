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
    return [
      'drupalLink_dialogTitleAdd' => $this->t('Add Link')
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

}