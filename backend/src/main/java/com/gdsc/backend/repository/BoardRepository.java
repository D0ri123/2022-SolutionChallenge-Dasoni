package com.gdsc.backend.repository;

import com.gdsc.backend.entity.Board;
import com.gdsc.backend.entity.enums.BoardCategory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
    @Query(value = "SELECT b from Board b where b.boardCategory = :boardCategory order by b.startDate desc")
    Page<Board> findByBoardCategory(@Param("boardCategory") BoardCategory boardCategory, Pageable pageable);

    @Query(value = "SELECT b from Board b where b.bookmark = true order by b.startDate desc")
    Page<Board> findByBookmark(Pageable pageable);
}