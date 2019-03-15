/**
 * Author: Matt Pennington
 */

 let mouseX = null;
 let mouseY = null;

$( '#gestureArea' ).mousedown( event => {
  $( '#gestureResult' ).text( 'mousedown' );
  mouseX = event.pageX;
  mouseY = event.pageY;
} );


$( '#gestureArea' ).mouseup( event => {
  $( '#gestureResult' ).text( 'mouseup' );
  if ( mouseX && !mouseY ) {
    if ( event.pageX > mouseX ) {
      $( '#gestureResult' ).text( 'swipe right' );
    }
    else if ( event.pageX < mouseX ) {
      $( '#gestureResult' ).text( 'swipe left' ); 
    }
    mouseX = null;
  }
  else if ( !mouseX && mouseY ) {
    if ( event.pageY > mouseY ) {
      $( '#gestureResult' ).text( 'swipe down' );
    }
    else if ( event.pageY < mouseY ) {
      $( '#gestureResult' ).text( 'swipe up' ); 
    }
    mouseY = null;
  }
  else if ( mouseX && mouseY ) {
    if ( Math.abs( event.pageX - mouseX ) > Math.abs( event.pageY - mouseY ) ) {
      if ( event.pageX > mouseX ) {
        $( '#gestureResult' ).text( 'swipe right' );
      }
      else if ( event.pageX < mouseX ) {
        $( '#gestureResult' ).text( 'swipe left' ); 
      }
    }
    else {
      if ( event.pageY > mouseY ) {
        $( '#gestureResult' ).text( 'swipe down' );
      }
      else if ( event.pageY < mouseY ) {
        $( '#gestureResult' ).text( 'swipe up' ); 
      }
    }
    mouseX = null;
    mouseY = null;
  }
} );


let numClicks = 0;

$( '#gestureArea' ).click( event => {
  if ( numClicks === 0 ) {
    setTimeout( () => {
      if ( numClicks === 2 ) {
        $( '#gestureResult' ).text( 'doubleclick' );
      }
      if ( numClicks === 3 ) {
        $( '#gestureResult' ).text( 'tripleclick' );
      }
      if ( numClicks === 4 ) {
        $( '#gestureResult' ).text( 'quadrupleclick' );
      }
      if ( numClicks > 4 ) {
        $( '#gestureResult' ).text( 'waytoomuchcoffee' );
      }
      numClicks = 0
    }, 350 );
  }
  numClicks++;
} );