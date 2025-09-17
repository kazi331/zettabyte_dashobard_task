// "use client"

import { Card, CardContent, CardHeader } from "@/components/shared/Card";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Post } from "@/types";
import Link from "next/link";

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const excerpt = post.body.length > 100
    ? post.body.substring(0, 100) + '...'
    : post.body;

  return (
    <Link href={`/posts/${post.id}`} className="group/link">
      <Card className="h-full hover:shadow-lg transition-all duration-200 hover:border-primary/40">
        <CardHeader className="bg-transparent">
          <h3 className="text-lg font-semibold text-gray-700 line-clamp-2 leading-tight">{capitalizeFirstLetter(post.title)}</h3>
          <div className="flex items-center space-x-2 text-xs text-gray-500 mt-2">
            <span aria-label={`Post number ${post.id}`}>Post #{post.id}</span>
            <span aria-label={`Created by user ${post.userId}`}>User {post.userId}</span>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-gray-600 line-clamp-3 leading-relaxed">{excerpt}</p>
          <div className="mt-4 flex items-center text-primary text-sm font-medium ">
            Read more
            {/* svg: dash like icon */}
            <svg className="w-0 group-hover/link:w-4 h-4 ml-2 transition-all" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
            <svg className="w-4 h-4 -ml-2 group-hover/link:-ml-3 transition-all" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

        </CardContent>
      </Card>
    </Link>
  )
}
