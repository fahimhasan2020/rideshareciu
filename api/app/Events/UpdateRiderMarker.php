<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UpdateRiderMarker implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $user, $lat,$lon;

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return ['usertrackrider.'.$this->user];
    }

    public function broadcastAs()
    {
      return 'usertrackrider.'.$this->user;
    }


    public function broadcastWith()
    {
        return [ 
        'user'=>$this->user,
        'lat'=>$this->lat,
        'lon'=>$this->lon,    
    ];
    }
}
