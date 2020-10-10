<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UserCheckRider implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $user;
    public $time;
    public $rider;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($user,$time,$rider)
    {
        $this->user = $user;
        $this->time = $time;
        $this->rider = $rider;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return ['rider.accept.user'];
    }

    public function broadcastAs()
    {
      return 'rider.accept.user';
    }


    public function broadcastWith()
    {
        return [ 
        'user'=>$this->user,
        'time'=>$this->time,
        'rider'=>$this->rider,    
    ];
    }
}
