export const WHATSAPP = '917019260151'
export const wa = (message:string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`

export const cakes = [
 {id:'vintage-rose',name:'Vintage Rose',category:'Vintage',price:'From ₹1,499',image:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85'},
 {id:'midnight-chocolate',name:'Midnight Chocolate',category:'Birthday',price:'From ₹1,299',image:'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1200&q=85'},
 {id:'ivory-bloom',name:'Ivory Bloom',category:'Wedding',price:'From ₹2,499',image:'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=85'},
 {id:'lavender-dream',name:'Lavender Dream',category:'Luxury',price:'From ₹1,799',image:'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=1200&q=85'},
 {id:'strawberry-cloud',name:'Strawberry Cloud',category:'Minimal',price:'From ₹1,399',image:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85'},
 {id:'golden-celebration',name:'Golden Celebration',category:'Luxury',price:'From ₹2,199',image:'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1200&q=85'}
]

export const categories = [
 ['Designer Cakes','https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=1200&q=85'],
 ['Custom Cakes','https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85'],
 ['Photo Cakes','https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=85'],
 ['Anniversary','https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1200&q=85'],
 ['Birthday','https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85'],
 ['Wedding','https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1200&q=85']
]

export const occasions = [
 ['Birthday','Make their day sweeter.','https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=1200&q=85'],
 ['Anniversary','Celebrate your story.','https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1200&q=85'],
 ['Wedding','A centrepiece worth remembering.','https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1200&q=85'],
 ['Baby Shower','Something beautiful for a new beginning.','https://images.unsplash.com/photo-1578926288207-a90a5366759d?auto=format&fit=crop&w=1200&q=85'],
 ['Graduation','A sweet way to celebrate the milestone.','https://images.unsplash.com/photo-1464347601390-25e2842a37f1?auto=format&fit=crop&w=1200&q=85'],
 ['Corporate','Celebrate your team or brand.','https://images.unsplash.com/photo-1607478900766-efe13248b125?auto=format&fit=crop&w=1200&q=85']
]
