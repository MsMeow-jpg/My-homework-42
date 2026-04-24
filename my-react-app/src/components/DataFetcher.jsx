import { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetcher({ postId }) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        )

        setPost(response.data)
      } catch (err) {
        setError('The abbey messenger failed to bring the data.')
        setPost(null)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [postId])

  if (loading) {
    return (
      <section className="message-card">
        <div className="loader"></div>
        <p>Loading data...</p>
        <span>The monks are searching the archive...</span>
      </section>
    )
  }

  if (error) {
    return (
      <section className="message-card error-card">
        <h2>Request Failed</h2>
        <p>{error}</p>
      </section>
    )
  }

  const abbeyReports = {
    1: {
      title: 'Golden Ale Fermentation Notes',
      body: 'The monks recorded a stable fermentation process. The ale has a bright golden color, light malt aroma, and a clean finish suitable for the abbey cellar.',
    },
    2: {
      title: 'Dark Malt Storage Report',
      body: 'The cellar keeper inspected the dark malt barrels. The batch shows deeper flavor potential, with roasted notes and a stronger body for future brewing.',
    },
    3: {
      title: 'Herbal Gruit Quality Check',
      body: 'The herbal mixture was reviewed before brewing. The gruit contains balanced bitter notes, gentle spice, and a pleasant aroma for traditional abbey ale.',
    },
    4: {
      title: 'Abbey Yeast Activity Record',
      body: 'The yeast culture became active during the first stage of brewing. The report confirms healthy bubbles, steady movement, and good brewing conditions.',
    },
    5: {
      title: 'Cellar Temperature Inspection',
      body: 'The brewing room temperature remained stable throughout the day. This creates better conditions for aging ale and preserving its rich flavor.',
    },
    6: {
      title: 'Copper Kettle Brewing Log',
      body: 'The main kettle was prepared for a new batch. The monks cleaned the vessel, checked the fire, and started the brewing process before sunset.',
    },
    7: {
      title: 'Barrel Aging Progress Note',
      body: 'The ale barrels are aging well in the lower cellar. The flavor is becoming smoother, with warm malt notes and a soft bitter finish.',
    },
    8: {
      title: 'Festival Ale Preparation',
      body: 'A special batch is being prepared for the abbey festival. The recipe includes extra malt, careful timing, and a richer aroma for guests.',
    },
    9: {
      title: 'Library Brewing Archive Entry',
      body: 'A new brewing scroll was added to the abbey library. It contains notes about ingredients, timing, and ale quality for future monks.',
    },
    10: {
      title: 'Final Ale Quality Review',
      body: 'The completed ale was tasted and approved by the abbey brewers. The result is balanced, smooth, and ready to be served in the tavern hall.',
    },
  }

  const currentReport = abbeyReports[post.id] || {
    title: `Abbey Brewing Report #${post.id}`,
    body: `The abbey archive has loaded record #${post.id} from the server. This entry confirms that the request was completed successfully with axios.`,
  }

  return (
    <article className="post-card">
      <div className="post-header">
        <span className="post-id">Scroll #{post.id}</span>
        <span className="wax-seal">✦</span>
      </div>

      <h2>{currentReport.title}</h2>

      <div className="divider"></div>

      <p>{currentReport.body}</p>
    </article>
  )
}

export default DataFetcher