import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import ProjectsPagePreview from './preview-templates/ProjectsPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import UsesPagePreview from './preview-templates/UsesPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', ProjectsPagePreview)
CMS.registerPreviewTemplate('products', UsesPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
