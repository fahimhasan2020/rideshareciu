<?php
use Sentienel;

function translations($json)
{
    if(!file_exists($json)) {
        return [];
    }
    return json_decode(file_get_contents($json), true);
}

function use_accessible($permission){
    if (Sentienel::hasAccess(['all',$permission])){
        return true;
    }
    return false;
}
