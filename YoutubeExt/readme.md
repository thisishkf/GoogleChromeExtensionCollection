# Youtube Extension Package

```html
<ytd-popup-container class="style-scope ytd-app">
  <yt-notification-action-renderer class="style-scope ytd-popup-container">
    <paper-toast id="toast" allow-click-through="" class="toast-button style-scope yt-notification-action-renderer" style="outline: none; display: none;" aria-hidden="true">
    

    <span id="label" class="style-scope paper-toast">Still watching? Video will pause soon</span>
    
      
        <yt-button-renderer id="action-button" class="style-scope yt-notification-action-renderer style-blue-text size-default" is-paper-button=""><a class="yt-simple-endpoint style-scope yt-button-renderer" tabindex="-1"><paper-button role="button" tabindex="0" animated="" aria-disabled="false" elevation="0" id="button" class="style-scope yt-button-renderer style-blue-text size-default"><yt-formatted-string id="text" class="style-scope yt-button-renderer style-blue-text size-default">Yes</yt-formatted-string></paper-button></a></yt-button-renderer>
      <template is="dom-if" class="style-scope yt-notification-action-renderer"></template>
      
    
  </paper-toast>
  </yt-notification-action-renderer><paper-dialog role="dialog" tabindex="-1" class="style-scope ytd-popup-container" style="outline: none; position: fixed; top: 209.5px; left: 182.805px; z-index: 2202;" prevent-autonav="true">
    
    <yt-confirm-dialog-renderer dialog="" class="style-scope ytd-popup-container">
    
    <div id="spinner" class="style-scope yt-confirm-dialog-renderer" hidden="">
      <paper-spinner class="style-scope yt-confirm-dialog-renderer" aria-hidden="true"><div id="spinnerContainer" class="  style-scope paper-spinner"><div class="spinner-layer layer-1 style-scope paper-spinner"><div class="circle-clipper left style-scope paper-spinner"></div><div class="circle-clipper right style-scope paper-spinner"></div></div><div class="spinner-layer layer-2 style-scope paper-spinner"><div class="circle-clipper left style-scope paper-spinner"></div><div class="circle-clipper right style-scope paper-spinner"></div></div><div class="spinner-layer layer-3 style-scope paper-spinner"><div class="circle-clipper left style-scope paper-spinner"></div><div class="circle-clipper right style-scope paper-spinner"></div></div><div class="spinner-layer layer-4 style-scope paper-spinner"><div class="circle-clipper left style-scope paper-spinner"></div><div class="circle-clipper right style-scope paper-spinner"></div></div></div></paper-spinner>
    </div>
    <yt-img-shadow id="thumbnail" notify-on-loaded="" width="256" class="style-scope yt-confirm-dialog-renderer no-transition" hidden=""><img id="img" class="style-scope yt-img-shadow" alt="" width="256"></yt-img-shadow>
    <div id="main" class="style-scope yt-confirm-dialog-renderer">
      <yt-img-shadow id="header-image" notify-on-loaded="" class="style-scope yt-confirm-dialog-renderer no-transition" hidden=""><img id="img" class="style-scope yt-img-shadow" alt=""></yt-img-shadow>
      <yt-formatted-string id="title" class="style-scope yt-confirm-dialog-renderer" hidden=""></yt-formatted-string>
      <paper-dialog-scrollable id="scroller" class="style-scope yt-confirm-dialog-renderer no-padding scrolled-to-bottom">
    

    <div id="scrollable" class="scrollable style-scope paper-dialog-scrollable" style="max-height: 440px; box-sizing: border-box; max-width: 628px;">
      
        
          <yt-formatted-string class="line-text style-scope yt-confirm-dialog-renderer" split-lines="">Video paused. Continue watching?</yt-formatted-string>
        <template is="dom-repeat" class="style-scope yt-confirm-dialog-renderer"></template>
      
    </div>
  </paper-dialog-scrollable>
      <div class="buttons style-scope yt-confirm-dialog-renderer">
        <yt-button-renderer id="cancel-button" defer-on-watch="" dialog-dismiss="" class="style-scope yt-confirm-dialog-renderer" hidden=""></yt-button-renderer>
        <yt-button-renderer id="confirm-button" defer-on-watch="" dialog-confirm="" class="style-scope yt-confirm-dialog-renderer style-blue-text size-default" is-paper-button=""><a class="yt-simple-endpoint style-scope yt-button-renderer" tabindex="-1"><paper-button role="button" tabindex="0" animated="" aria-disabled="false" elevation="0" id="button" class="style-scope yt-button-renderer style-blue-text size-default"><yt-formatted-string id="text" class="style-scope yt-button-renderer style-blue-text size-default">Yes</yt-formatted-string></paper-button></a></yt-button-renderer>
      </div>
    </div>
  </yt-confirm-dialog-renderer>
  </paper-dialog></ytd-popup-container>
```