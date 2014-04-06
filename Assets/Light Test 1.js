#pragma strict

function Start () {

}

if(Input.GetButtonDown("Fire1")){
    light.enabled = !light.enabled;
}