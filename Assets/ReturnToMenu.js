#pragma strict

function Start () {

}

function Update()
{
	if( Input.GetKeyUp( KeyCode.Escape ) )
	{
		Application.LoadLevel( "MainMenu" );
	}
}
