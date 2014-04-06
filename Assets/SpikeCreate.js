var spikeModulePrefab : GameObject;
var spike : GameObject;
var spikeModuleNumber : int = 5;	
private var spikeModules = new Array();
//TODO: Add things happening when the pieces hit the ground
//TODO: Add different modules. Make them all prefabs, have this script choose them at random
//TODO: Make a script for creating a Spike from the prefabs
//TODO: Have each prefab have an energy drain thing, and each prefab have a different hit the ground effect
//TODO: Have each prefab have different weight, etc
//TODO: Find out if I can select from prefabs in a folder, or if I have to manually select them all
//TODO: Change the FPC's hitbox to match the size of the Spike

function Awake()
{
    Screen.showCursor = true;
}

function Start () {
if ( spikeModulePrefab != null )
    {
        var spikeModuleSize = spikeModulePrefab.renderer.bounds.size;
                 
        var X = spike.transform.position.x + spikeModuleSize.x;
        var Y = spike.transform.position.y;
        var Z = spike.transform.position.z;
         
        var spikeModuleOrientation = spikeModulePrefab.transform.rotation;
         
        for( var i = 0; i < spikeModuleNumber; ++i )
        {            
            var spikeModule = Instantiate( spikeModulePrefab, Vector3( X, Y, Z ), spikeModuleOrientation );
            spikeModule.transform.parent = spike.transform;
            spikeModules.Push(spikeModule);
            Y -= spikeModuleSize.y;
            Debug.Log ("Added Spike Module", gameObject);
        }
        
        Debug.Log ("Number of modules: " + spikeModules.length);
    }
}

function Update () {

if ( Input.GetKeyDown(KeyCode.Q))
    {
    	//Debug.Log ("Module to be removed: " + modulesRemoved);
    	
        var removeMe = spikeModules[spikeModules.length-1] as UnityEngine.Object;
        //TODO: if(hit){destroy}	
    	removeMe.transform.parent = null;
    	
    	var gameObjectsRigidbody = removeMe.AddComponent(Rigidbody);	// Add the rigidbody.
		//gameObjectsRigidbody.mass = 5; // Set the GO's mass to 5 via the Rigidbody. //TODO: Change this to the module's weight
		
        spikeModules.RemoveAt(spikeModules.length-1);
        //Destroy(removeMe);
        
        //++modulesRemoved;
    }
}