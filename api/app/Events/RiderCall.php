<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class RiderCall implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $ride;
    public $rent;
    public $start;
    public $end;
    public $user;
    public $type;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($ride,$rent,$start,$end,$user,$type)
    {
        $this->ride = $ride;
        $this->rent = $rent;
        $this->start = $start;
        $this->end = $end;
        $this->user = $user;
        $this->type = $type;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return ['rider.calling'];
    }

    public function broadcastAs()
  {
      return 'rider.calling';
  }


    public function broadcastWith()
    {
        return [ 'ride'=>$this->ride,
        'rent'=>$this->rent,
        'start'=>$this->start,
        'end'=>$this->end,
        'user'=>$this->user,
        'type'=>$this->type    
    ];
    }
}
