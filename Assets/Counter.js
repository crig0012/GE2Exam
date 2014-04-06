var flares : GameObject[];
var flareTotal : int;

function Update()
{
	flares = GameObject.FindGameObjectsWithTag( "Flare" );
	flareTotal = flares.Length;
}

function OnGUI()
{
   guiText.text = "Remaining Flares: " + flareTotal;
}

function MinusScore()
{
	flareTotal--;
}