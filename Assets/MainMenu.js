#pragma strict

function OnGUI()
{
  var width = 200;
  var height = 50;
  var offset = 10;

  var x = ( Screen.width-width ) / 2;
  var y = ( Screen.height - (height * 2) ) / 2-10;

  if( GUI.Button ( Rect( x, y, width, height ), "Particles" ))
  {
    Application.LoadLevel( "Particles" );
  }

  y += height + offset;

  if( GUI.Button( Rect( x, y, width, height ), "Terrain" ))
  {
    Application.LoadLevel( "Terrain" );
  }
}
