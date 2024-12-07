// Phạm Bảo Minh Thế
// Bùi Bình Minh
// Nguyễn Hoàng Hưng
// Hoàng Thanh Nhật
import React from 'react';
import styles from '../styles/TheGioiPage.module.css';

const TheGioiPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <h1>Thế giới</h1>
                    <div className={styles.navLinks}>
                        <a href="https://vnexpress.net/the-gioi">Từ điển</a>
                        <a href="https://vnexpress.net/the-gioi">Nguyên liệu & ẩm thực</a>
                        <a href="https://vnexpress.net/the-gioi">Cuộc sống đời thường</a>
                        <a href="https://vnexpress.net/the-gioi">Quân sự</a>
                    </div>
                </div>

                <div className={styles.newsContainer}>
                    <div className={styles.mainNews}>
                        <div className={styles.newsImage}>
                            <img src="https://i1-vnexpress.vnecdn.net/2024/12/07/lq-02767-jpg-1733542099-173354-9064-5377-1733559219.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=JQpMRt0xRxOc3f5U8pr1Nw" alt="Tổng thống Hàn Quốc" />
                        </div>
                        <div className={styles.newsContent}>
                            <h2>Quốc hội Hàn Quốc bắt đầu bỏ phiếu luận tội Tổng thống</h2>
                            <p>Quốc hội Hàn Quốc bắt đầu phiên bỏ phiếu luận tội Tổng thống Yoon Suk-yeol, sau khi ông ban bố lệnh thiết quân luật gây tranh cãi.</p>
                            <div className={styles.newsInfo}>
                                <span>33' trước</span>
                                <span>Thế giới</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '1px', background: '#eee' }}></div>
                    <div className={styles.subNews}>
                        <div className={styles.newsCard}>
                            <img src="https://i1-vnexpress.vnecdn.net/2024/12/07/thiet-ke-chua-co-ten-12-173353-7782-5592-1733541846.png?w=280&h=168&q=100&dpr=1&fit=crop&s=2h3OPd9FNlpjAwYFsh9taA" alt="Tin tức 1" />
                            <h3>Điều gì xảy ra nếu Tổng thống Hàn Quốc bị luận tội</h3>
                        </div>
                        <div className={styles.newsCard}>
                            <img src="https://i1-vnexpress.vnecdn.net/2024/12/07/thiet-ke-chua-co-ten-12-173353-7782-5592-1733541846.png?w=280&h=168&q=100&dpr=1&fit=crop&s=2h3OPd9FNlpjAwYFsh9taA" alt="Tin tức 2" />
                            <h3>Chủ tịch Quốc hội đề nghị Việt – Nhật thúc đẩy hợp tác khoa học, công nghệ</h3>
                        </div>
                        <div className={styles.newsCard}>
                            <img src="https://i1-vnexpress.vnecdn.net/2024/12/07/thiet-ke-chua-co-ten-12-173353-7782-5592-1733541846.png?w=280&h=168&q=100&dpr=1&fit=crop&s=2h3OPd9FNlpjAwYFsh9taA" alt="Tin tức 3" />
                            <h3>Bà Melania bán đồ trang trí Giáng sinh</h3>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '1px', background: '#eee' }}></div>
                </div>

            </div>
            <div className={styles.newsSection}>
    
                <div className={styles.mainArticles}>
                    <article className={styles.articleLarge}>
                        <img src="https://i1-vnexpress.vnecdn.net/2024/12/07/southkoreanparliament202405895-5939-6463-1733560514.png?w=220&h=132&q=100&dpr=1&fit=crop&s=q1zYLBtK_Td_dmehWUvt4w" alt="Quốc hội Hàn Quốc" />
                        <div className={styles.content}>
                            <h2>Quốc hội Hàn Quốc bắt đầu bỏ phiếu luận tội Tổng thống</h2>
                            <p>Quốc hội Hàn Quốc bắt đầu phiên bỏ phiếu luận tội Tổng thống Yoon Suk-yeol, sau khi ông ban bố lệnh thiết quân luật gây tranh cãi.</p>
                        </div>
                    </article>

                    <article className={styles.articleMedium}>
                        <img src="https://i1-vnexpress.vnecdn.net/2024/12/07/southkoreanparliament202405895-5939-6463-1733560514.png?w=220&h=132&q=100&dpr=1&fit=crop&s=q1zYLBtK_Td_dmehWUvt4w" alt="Ukraine" />
                        <div className={styles.content}>
                            <h3>Đi hay ở - trần trở của những chàng trai Ukraine sắp 18 tuổi</h3>
                            <p>Một tháng trước khi tròn 18 tuổi, Roman Biletskyi quyết định rời nhà lên chuyến tàu về phía tây để ra khỏi Ukraine, tránh nhập ngũ.</p>
                        </div>
                    </article>

                    <article className={styles.articleMedium}>
                        <img src="https://i1-vnexpress.vnecdn.net/2024/12/07/southkoreanparliament202405895-5939-6463-1733560514.png?w=220&h=132&q=100&dpr=1&fit=crop&s=q1zYLBtK_Td_dmehWUvt4w" alt="Italy" />
                        <div className={styles.content}>
                            <h3>Bà xơ bị bắt vì cáo buộc cấu kết với mafia</h3>
                            <p>ITALY - Nữ tu sĩ ở Milan bị cáo buộc lợi dụng vai trò tâm linh trong nhà tù để truyền lệnh của các ông trùm mafia cho đàn em bên ngoài.</p>
                        </div>
                    </article>

                    <article className={styles.articleMedium}>
                        <img src="https://i1-vnexpress.vnecdn.net/2024/12/07/southkoreanparliament202405895-5939-6463-1733560514.png?w=220&h=132&q=100&dpr=1&fit=crop&s=q1zYLBtK_Td_dmehWUvt4w" alt="Iran" />
                        <div className={styles.content}>
                            <h3>IAEA nói Iran sẽ tăng gấp 7 lần sản lượng uranium làm giàu</h3>
                            <p>Iran có kế hoạch sản xuất hơn 34 kg uranium làm giàu mỗi tháng, gấp hơn 7 lần hiện nay, theo báo cáo mật của IAEA.</p>
                        </div>
                    </article>
                </div>

                <div className={styles.analysisSection}>
                    <h2 className={styles.sectionTitle}>Phân tích</h2>
                    <div className={styles.analysisGrid}>
                        <article className={styles.analysisCard}>
                            <img src="https://i1-vnexpress.vnecdn.net/2024/12/07/southkoreanparliament202405895-5939-6463-1733560514.png?w=220&h=132&q=100&dpr=1&fit=crop&s=q1zYLBtK_Td_dmehWUvt4w" alt="Syria" />
                            <h3>Đà tiến của phiến quân đẩy chính phủ Syria tới hiểm cảnh</h3>
                            <p>Liên tiếp mất hai thành phố chiến lược Aleppo và Hama, chính quyền Tổng thống Assad nguy cơ hứng chịu thêm ...</p>
                        </article>
                        <article className={styles.analysisCard}>
                            <img src="https://i1-vnexpress.vnecdn.net/2024/12/07/southkoreanparliament202405895-5939-6463-1733560514.png?w=220&h=132&q=100&dpr=1&fit=crop&s=q1zYLBtK_Td_dmehWUvt4w" alt="Syria" />
                            <h3>Đà tiến của phiến quân đẩy chính phủ Syria tới hiểm cảnh</h3>
                            <p>Liên tiếp mất hai thành phố chiến lược Aleppo và Hama, chính quyền Tổng thống Assad nguy cơ hứng chịu thêm ...</p>
                        </article>
                        <article className={styles.analysisCard}>
                            <img src="https://i1-vnexpress.vnecdn.net/2024/12/07/southkoreanparliament202405895-5939-6463-1733560514.png?w=220&h=132&q=100&dpr=1&fit=crop&s=q1zYLBtK_Td_dmehWUvt4w" alt="Syria" />
                            <h3>Đà tiến của phiến quân đẩy chính phủ Syria tới hiểm cảnh</h3>
                            <p>Liên tiếp mất hai thành phố chiến lược Aleppo và Hama, chính quyền Tổng thống Assad nguy cơ hứng chịu thêm ...</p>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TheGioiPage;