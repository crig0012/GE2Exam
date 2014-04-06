//var counter : Counter;
var pe : ParticleSystem	;

function OnTriggerEnter( otherObj : Collider )
{
	if( otherObj.tag == "Golfball" )
	{
		pe.Stop();
		//counter.MinusScore();
		//Debug.Log( "STOP EMITTING" );
		
		//Counter.flareTotal = flareTotal--;
	}
}