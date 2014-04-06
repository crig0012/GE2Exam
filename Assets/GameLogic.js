/*
This script contains code from http://3dgep.com/?p=3474
*/

#pragma strict
var forceMultiplier : float = 30000;
var ballPrefab : GameObject;

function Start () 
{

}



function Update () 
{
    if ( Input.GetMouseButtonDown(0) )
    {
        var ray : Ray = Camera.main.ScreenPointToRay( Input.mousePosition );
        
        var ball = Instantiate( ballPrefab, ray.origin, Quaternion.identity );
        ball.rigidbody.AddForce( ray.direction * forceMultiplier );
    }
}