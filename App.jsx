import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Plus, Heart, GripVertical, Target, Calendar, Repeat, StickyNote, Image as ImageIcon, Trash2 } from 'lucide-react'
import './App.css'

const CONTENT_TYPES = {
  note: { icon: StickyNote, label: 'Quick Note', color: 'bg-yellow-100 border-yellow-300' },
  goal: { icon: Target, label: 'Goal', color: 'bg-green-100 border-green-300' },
  plan: { icon: Calendar, label: 'Plan', color: 'bg-blue-100 border-blue-300' },
  ritual: { icon: Repeat, label: 'Ritual', color: 'bg-purple-100 border-purple-300' },
  image: { icon: ImageIcon, label: 'Image', color: 'bg-pink-100 border-pink-300' }
}

const CATEGORIES = ['Love & Relationships', 'Travel & Adventure', 'Career & Growth', 'Health & Wellness', 'Home & Family', 'Personal Development']

function App() {
  const [items, setItems] = useState([])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedType, setSelectedType] = useState('note')
  const [draggedItem, setDraggedItem] = useState(null)
  const [filter, setFilter] = useState('all')

  // Load items from localStorage on mount
  useEffect(() => {
    const savedItems = localStorage.getItem('visionBoardItems')
    if (savedItems) {
      setItems(JSON.parse(savedItems))
    }
  }, [])

  // Save items to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('visionBoardItems', JSON.stringify(items))
  }, [items])

  const addItem = (formData) => {
    const newItem = {
      id: Date.now(),
      type: selectedType,
      title: formData.get('title'),
      content: formData.get('content'),
      category: formData.get('category'),
      imageUrl: formData.get('imageUrl'),
      position: { x: Math.random() * 300, y: Math.random() * 200 },
      likes: 0,
      createdAt: new Date().toISOString()
    }
    setItems([...items, newItem])
    setIsAddDialogOpen(false)
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const likeItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, likes: item.likes + 1 } : item
    ))
  }

  const updateItemPosition = (id, position) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, position } : item
    ))
  }

  const handleDragStart = (e, item) => {
    setDraggedItem(item)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e) => {
    e.preventDefault()
    if (draggedItem) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left - 100 // Offset for card center
      const y = e.clientY - rect.top - 50
      updateItemPosition(draggedItem.id, { x: Math.max(0, x), y: Math.max(0, y) })
      setDraggedItem(null)
    }
  }

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-coral-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-coral-600">Our Vision Board</h1>
              <p className="text-gray-600">Dreams, goals, and rituals we share together</p>
            </div>
            <div className="flex items-center gap-4">
              <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg bg-white"
              >
                <option value="all">All Categories</option>
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-coral-500 hover:bg-coral-600 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Item</DialogTitle>
                  </DialogHeader>
                  <form action={addItem} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(CONTENT_TYPES).map(([type, config]) => {
                          const Icon = config.icon
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setSelectedType(type)}
                              className={`p-3 border-2 rounded-lg flex items-center gap-2 transition-colors ${
                                selectedType === type 
                                  ? 'border-coral-500 bg-coral-50' 
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                              <span className="text-sm">{config.label}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Title</label>
                      <Input name="title" placeholder="Enter a title..." required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Content</label>
                      <Textarea name="content" placeholder="Describe your idea, goal, or plan..." rows={3} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Category</label>
                      <select name="category" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        {CATEGORIES.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    {selectedType === 'image' && (
                      <div>
                        <label className="block text-sm font-medium mb-2">Image URL</label>
                        <Input name="imageUrl" placeholder="https://..." type="url" />
                      </div>
                    )}
                    <Button type="submit" className="w-full bg-coral-500 hover:bg-coral-600">
                      Add to Vision Board
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Vision Board Canvas */}
      <main 
        className="relative min-h-screen p-6"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="container mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-coral-100 rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-coral-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Start Your Vision Board</h2>
              <p className="text-gray-500 mb-6">Add your first dream, goal, or idea to get started!</p>
              <Button 
                onClick={() => setIsAddDialogOpen(true)}
                className="bg-coral-500 hover:bg-coral-600 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Item
              </Button>
            </div>
          ) : (
            <div className="relative">
              {filteredItems.map((item) => {
                const config = CONTENT_TYPES[item.type]
                const Icon = config.icon
                return (
                  <Card
                    key={item.id}
                    className={`absolute w-64 cursor-move transition-transform hover:scale-105 hover:shadow-lg ${config.color}`}
                    style={{
                      left: `${item.position.x}px`,
                      top: `${item.position.y}px`,
                      transform: draggedItem?.id === item.id ? 'rotate(5deg)' : 'none'
                    }}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-gray-600" />
                          <Badge variant="secondary" className="text-xs">
                            {config.label}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          <GripVertical className="w-4 h-4 text-gray-400" />
                          <button
                            onClick={() => deleteItem(item.id)}
                            className="p-1 hover:bg-red-100 rounded"
                          >
                            <Trash2 className="w-3 h-3 text-red-500" />
                          </button>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                      
                      {item.content && (
                        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{item.content}</p>
                      )}
                      
                      {item.imageUrl && (
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                      )}
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <button
                          onClick={() => likeItem(item.id)}
                          className="flex items-center gap-1 text-coral-500 hover:text-coral-600"
                        >
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{item.likes}</span>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </main>

      {/* Stats Footer */}
      {items.length > 0 && (
        <footer className="bg-white/80 backdrop-blur-sm border-t border-coral-200 py-4">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <span>{items.length} items on your board</span>
              <span>{items.reduce((sum, item) => sum + item.likes, 0)} total likes</span>
              <span>{new Set(items.map(item => item.category)).size} categories</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}

export default App

