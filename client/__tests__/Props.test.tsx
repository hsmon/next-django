import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PostDetail from '../pages/posts/[id]'
import { POST } from '../types/types'

describe('PostDetailPage Test Cases', () => {
  const dummyProps: POST = {
    id: 1,
    title: 'title1',
    content: 'content1',
    username: 'username1',
    tags: [
      { id: 1, name: 'tag1' },
      { id: 2, name: 'tag2' },
    ],
    created_at: '2021-04-07 07:32:22',
  }

  it('should render correctlly given props value', () => {
    render(<PostDetail {...dummyProps} />)
    expect(screen.getByText(dummyProps.title)).toBeInTheDocument()
    expect(screen.getByText(dummyProps.content)).toBeInTheDocument()
    expect(screen.getByText(`by ${dummyProps.username}`)).toBeInTheDocument()
    expect(screen.getByText(dummyProps.tags[0].name)).toBeInTheDocument()
    expect(screen.getByText(dummyProps.tags[1].name)).toBeInTheDocument()
    expect(screen.getByText(dummyProps.created_at)).toBeInTheDocument()
  })
})
