<?php

namespace App\Events;

use App\Model\AdminChat;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class AdminChatMessage implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;

    public function __construct(AdminChat $adminChat)
    {
        $this->message = $adminChat;
    }

    public function broadcastOn()
    {
        return ['admin-chat.'.$this->message->to];
    }

    public function broadcastWith()
    {
        return ['message'=>$this->message];
    }
}
